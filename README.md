# Stream 1 Project - Photographer's Site

My project is a Photographer's Page to showcase their photos and work to the
public. Users can view a carousel that exhibits some of the best photos. The Gallery
is where the majority of photos can be viewed and a Package Planner where users 
can tailor bespoke packages to their needs. Users can find out about local events
and read testimonials of previous customers.

## UX

My project is designed for users who are looking for a photographer. Users
should be drawn in by the images and find more information as they navigate
through the site. Users want to know if the service is what they are looking
for, which the user can see in the galleries. Users can pick the package that
suits them best by an interactive form and view testimonials from previous
customers.

As a User I would want to be:
- drawn in by the content, to want to see more
- informed about the photographer, so I know about them
- able to view previous work, to see how good the service is
- able to choose what I want from the service, so I don't have something I don't want
- able to see what others think, so I know others opinions
- able to see what events are on, to see the photographer in person
- able to leave a testimonial, to let them know what I think

Mock ups can be viewed for each page below:
- [Index](/mock_ups/index.jpg)
- [About](/mock_ups/about.jpg)
- [Gallery](/mock_ups/gallery.jpg)
- [Events](/mock_ups/events.jpg)
- [Contact](/mock_ups/contacts.jpg)


## Features

### Existing Features

Currently these are the features that are implemented and how each feature 
provides UX:

- Carousel 
    - allows users to see mutliple fullscreen images, to make them want to see more
- About
    - allows users to be informed about the photographer, to know about them
- Galleries
    - allows users to view preivous work, by viewing the galleries and inspecting the images
- Package Planner
    - allows users to select a package for an occasion, by using the interactive form
    - allows users to select what they want, by filling in the form selected
- Testimonials
    - allows users to leave a testimonial, by filling in the testimonial form
    - allows users to see other users testimonials, to know others opinions

### Planned Features

- User Accounts
    - to allows users to store packages

## Technology Used 

- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** gives my project a simple, responsive layout
- [JQuery](https://jquery.com)
    - **JQuery** is used to give better UX.

## Testing

As I developed my project I did manual tests to check it was working as
designed and displaying correctly. 

I have also tested my project for responsiveness and on different browsers which
is detailed in [Browser Tests](/tests/browser_tests.pdf/)

### User Tests

As I deployed a new feature, I did manual tests to check the UI and UX worked as expected.
Below is a list of features and the tests I carried out:

- Carousel
    - Navigate to homepage
    - When pointer is over image, it will not move on to next image
    - Click on next arrow, will move to next image
    - Click on preivous arrow, will move back to previous image
- About
    - Navigate to About page
    - Click on one of the images, will go to galley related to image
- Galleries
    - Navigate to Gallery page
    - Click on one of the images, will go to galley related to image
    - When in the galleries click on link for another gallery, will got to other gallery
    - Click on image in gallery will open a lightbox, to view the image
    - Click on next arrow in lightbox, will move to next image
    - Click on preivous arrow in lightbox, will move back to previous image
    - Click on close in lightbox, will close lightbox
- Package Planner
    - Navigate to Event page
    - Click on a package, shows a form for the related package
    - Try submit the form with empty inputs, will display required message
    - Try submit the form with name filled, will display required message address
    - Try submit the form completed, will display success message
    - On successfully submission, submit button will be disabled to prevent duplicates
- Testimonial Form
    - Navigate to Contact page
    - Try submit the form with empty inputs, will display required message
    - Try submit the form with name filled, will display required message location
    - Try submit the form completed, will display success message 

## Deployment

### Github Pages 

My project is deployed on [Github Pages](https://pages.github.com/) hosting platform and
can be viewed at [Photographer's Site](https://tmcnally17.github.io/Stream-1-Project/)

When deploying the project I needed to:

- Create a new branch for gh-pages
- Change the links to include the repository name


### Local

To run locally you need to clone the repository

    - git clone https://github.com/TMcNally17/Stream-1-Project.git

Use the master branch

    - git checkout master
    
Run project

    - Run index.html on local host


## Credit

### Images

All images are from [Pexels](https://www.pexels.com/)

- Index
    - [Index 1](https://www.pexels.com/photo/seaport-during-daytime-132037/)
    - [Index 2](https://www.pexels.com/photo/river-and-mountain-ahead-1327373/)
    - [Index 3](https://www.pexels.com/photo/landscape-nature-night-relaxation-36478/)

- About
    - [Portrait 1](https://www.pexels.com/photo/camera-sony-man-37838/)
    - [Wedding 2](https://www.pexels.com/photo/midsection-of-woman-making-heart-shape-with-hands-256737/)
    - [Event 3](https://www.pexels.com/photo/restaurant-party-architecture-windows-34166/)

- Gallery
    - [Wedding 1](https://www.pexels.com/photo/adult-beautiful-bride-card-388240/)
    - [Party 1](https://www.pexels.com/photo/birthday-cake-celebrate-celebration-6679/)
    - [Event 2](https://www.pexels.com/photo/bar-drinks-party-champagne-16408/)
    - [Portrait 2](https://www.pexels.com/photo/man-young-happy-smiling-91227/)

- Portrait Gallery
    - [Portrait Gallery 1](https://www.pexels.com/photo/woman-wearing-coat-762020/)
    - [Portrait Gallery 2](https://www.pexels.com/photo/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-photo-736716/)
    - [Portrait Gallery 3](https://www.pexels.com/photo/adolescence-attractive-beautiful-blur-573299/)
    - [Portrait Gallery 4](https://www.pexels.com/photo/blur-boy-casual-close-up-428333/)
    - [Portrait Gallery 5](https://www.pexels.com/photo/portrait-of-young-woman-247322/)
    - [Portrait Gallery 6](https://www.pexels.com/photo/man-in-beanie-holding-his-shoulder-193355/)
    - [Portrait Gallery 7](https://www.pexels.com/photo/adult-beautiful-blonde-blur-324658/)
    - [Portrait Gallery 8](https://www.pexels.com/photo/men-s-gray-crew-neck-shirt-160914/)

- Wedding Gallery
    - [Wedding Gallery 1](https://www.pexels.com/photo/wedding-preparation-313707/)
    - [Wedding Gallery 2](https://www.pexels.com/photo/woman-wearing-beige-bridal-gown-during-day-time-193040/)
    - [Wedding Gallery 3](https://www.pexels.com/photo/man-couple-love-people-136422/)
    - [Wedding Gallery 4](https://www.pexels.com/photo/bride-and-groom-walking-down-the-aisle-794254/)
    - [Wedding Gallery 5](https://www.pexels.com/photo/adult-bridal-bride-brunette-341372/)
    - [Wedding Gallery 6](https://www.pexels.com/photo/blur-book-close-up-decoration-288008/)
    - [Wedding Gallery 7](https://www.pexels.com/photo/silhouette-of-wedding-couple-holding-hands-under-cloudy-blue-sky-37521/)
    - [Wedding Gallery 8](https://www.pexels.com/photo/adult-boutonniere-celebration-ceremony-372176/)

- Party Gallery
    - [Party Gallery 1](https://www.pexels.com/photo/photo-of-women-wearing-masks-787961/)
    - [Party Gallery 2](https://www.pexels.com/photo/woman-in-black-shirt-806715/)
    - [Party Gallery 3](https://www.pexels.com/photo/celebration-colorful-colourful-cupcakes-587741/)
    - [Party Gallery 4](https://www.pexels.com/photo/birthday-blue-bottle-candies-125545/)
    - [Party Gallery 5](https://www.pexels.com/photo/pink-and-red-balloons-during-daytime-226718/)
    - [Party Gallery 6](https://www.pexels.com/photo/blur-close-up-defocused-depth-of-field-428124/)
    - [Party Gallery 7](https://www.pexels.com/photo/happy-new-year-decorative-plate-714703/)
    - [Party Gallery 8](https://www.pexels.com/photo/birthday-blur-candle-celebration-269798/)

- Event Gallery
    - [Event Gallery 1](https://www.pexels.com/photo/fireworks-display-at-sydney-opera-house-799959/)
    - [Event Gallery 2](https://www.pexels.com/photo/people-sitting-watching-in-the-theater-301987/)
    - [Event Gallery 3](https://www.pexels.com/photo/crowd-in-front-of-people-playing-musical-instrument-during-nighttime-196652/)
    - [Event Gallery 4](https://www.pexels.com/photo/black-microphone-64057/)
    - [Event Gallery 5](https://www.pexels.com/photo/person-in-traditional-dress-at-the-street-784707/)
    - [Event Gallery 6](https://www.pexels.com/photo/man-running-in-marathon-792774/)
    - [Event Gallery 7](https://www.pexels.com/photo/action-adult-american-football-athletes-303353/)
    - [Event Gallery 8](https://www.pexels.com/photo/road-man-people-vehicle-139976/)

### Content

- Simplelightbox

The gallery lightboxs are from [Simplelightbox](https://www.jqueryscript.net/lightbox/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin.html)