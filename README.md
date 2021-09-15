# Movies

[![Website](https://img.shields.io/badge/View-Website-blue)](https://jaywad.com/blogs/best-android-apps-to-watch-download-free-movies-and-tv-series)

Android application which allow users to easily figure out the movies that are compatible and published in App Store using ReactNative Programming

## Contents
- [Movies](#movies)
  - [Contents](#contents)
  - [Short Description](#short-description)
    - [The idea](#the-idea)
    - [Summary](#summary)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting Started](#getting-started)
  - [Project screenshots](#project-screenshots)
  - [Privacy](#privacy)
  - [Acknowledgments](#acknowledgements)

## Short Description

It is a user-friendly application which displays the movies based on different genres like Featured,Action,Adventure,Role playing,Sports,Racing
We use TMDB website to frame API's and use them to fetch data to the screens in this app.
API formation - user can create an account in tmdb and frame their own API's with the access token provided.

### The idea
Creating user friendly platform for the users which displays the movies based on different genres like Featured,Action,Adventure,Role playing,Sports,Racing.

### Summary
Developed UI/UX and functionality for below screens

#### Home Screen
Top part of screen : Carousel view displaying the top-most Heroes list acted in movies
Bottom part of screen : Contains Genres listed movies like Featured,Action,Adventure,Role Playing,Sports,Racing
  
#### Movie Detail Screen
On clicking the movie from Home screen,it navigates to the Moviedetail page which displays the Movie image,title,votes count,ratings count,star count,description in detail.

#### Search Screen
which displays the genre items and on applying search, it filters the genre based on the search filter.

#### Search Category Screen
On clicking genre item in search screen it navigates to this screen and displays the Movie apps.

## Long description
[More detail is available here](https://github.com/saisree369/Movies/docs/Movies.docx)

## Project roadmap

The project currently does the following things

### Home Screen

It displays the Carousel view of Movies and the Genre List Movies 

#### Carousel View
![Home screen Carousel View](https://github.com/saisree369/Movies/docs/Images/carousel.png?raw=true "Carousel")


## Getting Started

Programming Language - Reactnative
You can clone the code directly and build it in VS Code

``## MovieviceApp Android Release``

cd Movies

npm run new clear

``## this step required to fix error in react-native-push-notification: Appears to be a git repo or submodule.``

rm -rf node_modules/*/.git

npm install

``# patch some modules``

npm  run patch-node-modules


``# install in android``

react-native run-android

## Compatible devices
- All android phones with SDK version >= 28

## Project Screenshots 

[Please find all the screenshots of all screens in the project](https://github.com/saisree369/Movies/tree/main/docs/Images)

## Privacy 

[Privacy Statement](https://docs.google.com/document/d/1KJkDmGjLHr8aT6ed64ZA7X84sXQS5Svt-4MC8aEAbfw/edit)

## Acknowledgements

- Based on [Call For Code's README template](https://github.com/Call-for-Code/Project-Sample/blob/main/README.md)




  
  
  

