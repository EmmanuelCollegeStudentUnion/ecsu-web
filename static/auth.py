#!/usr/bin/python3

import cgitb
import random
from dotenv import load_dotenv
from requests_oauthlib import OAuth2Session
import os
from os.path import join, dirname


cgitb.enable() # Will catch tracebacks and errors for you. Comment it out if you no-longer need it.
load_dotenv(join(dirname(__file__), '.env'))
client_id = os.environ.get("OAUTH_CLIENT_ID")
scope = 'repo,user'
authorization_base_url = 'https://github.com/login/oauth/authorize'

if __name__ == '__main__':
  github = OAuth2Session(client_id, scope='repo,user')
  authorization_url, state = github.authorization_url(authorization_base_url)
  print('Location: '+authorization_url)
  print('\n\n')# HTTP says you have to have a blank line between headers and content

