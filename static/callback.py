#! /usr/bin/python3
import cgi
import cgitb
import json
import os
from os.path import join, dirname
from dotenv import load_dotenv
from requests_oauthlib import OAuth2Session



load_dotenv(join(dirname(__file__), '.env'))
client_id = os.environ.get("OAUTH_CLIENT_ID")
client_secret = os.environ.get("OAUTH_CLIENT_SECRET")
token_host = os.environ.get('GIT_HOSTNAME', 'https://github.com')
token_path = os.environ.get('OAUTH_TOKEN_PATH', '/login/oauth/access_token')
token_url = '{token_host}{token_path}'.format(token_host=token_host, token_path=token_path)
scope = 'repo,user'
uri = "https://nh487.user.srcf.net"+os.environ["REQUEST_URI"]

arguments = cgi.FieldStorage()
if __name__ == '__main__':
  """ retrieve access token """
  state = arguments['state'].value
  try:
    github = OAuth2Session(client_id, state=state, scope=scope)
    token = github.fetch_token(token_url, client_secret=client_secret, authorization_response=uri)
    content = json.dumps({'token': token.get('access_token', ''), 'provider': 'github'})
    message = 'success'
  except BaseException as e:
    message = 'error'
    content = str(e)+' '+str(token_url)
  post_message = json.dumps('authorization:github:{0}:{1}'.format(message, content))
  print("Content-type: text/html\n\n")
  print("""<html><body><script>
    (function() {
    function recieveMessage(e) {
    console.log("recieveMessage %o", e)
    // send message to main window with da app
    window.opener.postMessage(
    """+post_message+""",
    e.origin
    )
    }
    window.addEventListener("message", recieveMessage, false)
    // Start handshare with parent
    console.log("Sending message: %o", "github")
    window.opener.postMessage("authorizing:github", "*")
    })()
    </script></body></html>""")
