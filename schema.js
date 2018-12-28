import { makeExecutableSchema } from 'graphql-tools'
import content from './content'
import { resolveImage } from './content'
const typeDefs = `
  type Image{
    src: String
    srcSet: String
    placeholder: String
    alt: String
  }
  type TextCard{
    title: String
    icon: String
    description: String
  }
  type ImageCaptionCard{
    title: String
    image: Image
    description: String
    url: String
  }
  type HomePage {
    ecsuDoes: [TextCard]
    whatsHere: [ImageCaptionCard]
  }
  type WhatsOnEvent{
    title: String
    datetime: String
    pubDate: String
    image: Image
    body: String
    url:String
  }
  type Exec{
    title: String
    email: String
    name: String
    image: Image
    body: String
    url:String
  }
  type Society{
    title:String
    image:Image
    url: String
    body: String
  }
  type InfoPage{
    title: String
    subtitle: String
    image: Image
    body: String
    url: String
  }
  type Post{
    title: String
    subtitle: String
    image: Image
    body: String
    url: String
  }
  type Blog{
    title: String
    description: String
    posts: [Post]
    url: String
  }
  type Comment{
    year: String
    body: String
  }
  type Room{
    title:String
    grade: Int
    images: [Image]
    network: String
    basin: String
    livingRoom: String
    cudn: Boolean
    floor: String
    url: String
    comments: [Comment]
  }
  type RoomLocation{
    title: String
    image: Image
    url: String
    body: String
    rooms: [Room]
  }
  type Query {
    homePage: HomePage
    whatsOn(title:String!): WhatsOnEvent
    whatsOnEvents: [WhatsOnEvent]
    exec(title:String!): Exec
    execs: [Exec]
    society(title:String!): Society
    societies: [Society]
    welfarePage(title:String!): InfoPage
    welfarePages: [InfoPage]
    infoPage(title:String!): InfoPage
    infoPages: [InfoPage]
    prospectivePage(title:String!): InfoPage
    prospectivePages: [InfoPage]
    blog(title: String!): Blog
    blogs: [Blog]
    post(title:String!): Post
    roomLocations: [RoomLocation]
    roomLocation(title:String!): RoomLocation
    room(title:String!): Room
  }
`;

// Resolvers define the technique for fetching the types in the
// schema. 
const resolvers = {
  ImageCaptionCard: {
    image: obj => resolveImage(obj.image, obj.title)
  },
  HomePage: {
    ecsuDoes: obj => obj['ecsu_does'],
    whatsHere: obj => obj['whats_here'],
  },
  Exec: {
    image: obj => resolveImage(obj.image, obj.name)
  },
  Society: {
    image: obj => resolveImage(obj.image, obj.title)
  },
  InfoPage: {},
  Post: {
    image: obj => resolveImage(obj.image, obj.title)
  },
  Blog: {
    posts: obj => content("posts").then(result => result.filter(x => x.blog == obj.title))
  },
  Comment: {},
  Room: {
    livingRoom: obj => obj['living_room'],
    comments: obj => content("room_comments").then(result => result.filter(x => x.title == obj.title)),
    images: obj => obj.images.map(x => resolveImage(x, obj.title))
  },
  RoomLocation: {
    image: obj => resolveImage(obj.image, obj.title),
    rooms: obj => content("rooms").then(result => result.filter(x => x.location == obj.title))
  },
  WhatsOnEvent: {
    image: obj => resolveImage(obj.image, obj.title),
  },
  Query: {
    homePage: obj => content("pages", "home"),
    whatsOn: (obj, args) => content("whatson", args.title),
    whatsOnEvents: obj => content("whatson"),
    exec: (obj, args) => content("exec", args.title),
    execs: obj => content("exec"),
    society: (obj, args) => content("societies", args.title),
    societies: obj => content("societies"),
    welfarePage: (obj, args) => content("welfare", args.title),
    welfarePages: obj => content("welfare"),
    infoPage: (obj, args) => content("info", args.title),
    infoPages: obj => content("info"),
    prospectivePage: (obj, args) => content("prospective", args.title),
    prospectivePages: obj => content("prospective"),
    blog: (obj, args) => content("blogs", args.title),
    blogs: obj => content("blogs"),
    post: (obj, args) => content("posts", args.title),
    roomLocations: obj => content("room_locations"),
    roomLocation: (obj, args) => content("room_locations", args.title),
    room: (obj, args) => content("rooms", args.title),
  },
};
export default makeExecutableSchema({ typeDefs, resolvers })