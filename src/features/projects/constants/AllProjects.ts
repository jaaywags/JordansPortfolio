import { Project } from "../types/Project";

export default [{
  id: '1',
  name: 'Softgoods',
  description: 'Softgoods is one of my favorite projects to talk about! It is a cross platform mobile application for people who read fanfiction. There are many websites to read and publish fics on, but none that let you track everything across all sites in one place. That is what Softgoods does! You just copy the link to your favorite fic, paste it into softgoods, select a shelf, and that is it! You can add notes, mark fics as read, see reading stats, and more!\n\nCurrently softgoods supports over 3000 users, is available on both the App and Play stores, and is integrated with each stores payment systems to support purchasable subscriptions.\n\nTech: React JS, React Native, Entity Framework, .NET, MongoDB, Firebase, Algolia, Grafana, Digital Ocean, Docker, and more...',
  image: 'softgoods.webp'
}, {
  id: '2',
  name: 'Word Mountain',
  description: 'Word Mountain is another cross platform mobile app I built in React Native. I had a phase a while back where I would like Wordl a lot. A lot of the apps out there though are riddled with ads and paywalls. So, the simplest solution obviously was to make my own version of Wordl. Hence, Word Mountain was born one night at 2am.\n\nTech: React Native',
  image: 'wordmountain.webp'
}, {
  id: '3',
  name: 'Photo Fish',
  description: 'Photo Fish is actually a pivot from another project I worked on, Dive Sharp. Photo Fish is an app where you can upload images of fish and a custom made object detection model will scan the image and identify the species. It can handle multiple species in one photo. I made this for myself since I am a scuba diver and see all kinds of crazy fish.\n\nTech: React Native, .NET, YoloV5, Python, Django, Azure, Docker, Digital Ocean, and more...',
  image: 'photofish.webp'
}, {
  id: '4',
  name: 'Dive Sharp',
  description: 'As a scuba diver, when you go on dives, you have to log a ton of information. You track things like, dive times, depth, time at various depths, equipment, weather conditions, air mixture, and more. When you become certified, you learn to log these things on paper. Eventually, some people move to apps to track their logs. I was in the process of doing that but I decided to take this opportunity to learn new technologies and build my own diving app.\n\nTech: ReactJS, React Native, .NET, Entity Framework, PostgresSQL, Docker, Kubernetes, Digital Ocean, and more...',
  image: 'divesharp.webp'
}] as Project[];