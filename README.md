## URLs

Frontend - https://shimmering-pie-97697b.netlify.app/
Backend - https://github.com/nictsc/crowdfunding_back_end

## Concept / Name

Crowds of Catan is a crowdfunding platform the Catanians (Catan Community) can pitch their Catan-inspired game campaigns and receive community backing. Players become investors; pledging support for creative expansions, custom maps and/or innovative rule variations. Want an extra robber run amok on resources? This project plans to bring those out of the box ambitions of the Catanians to life.

## Intended Audience / User Stories

- Catan players / developers
    - Authenticated users.
    - They have the ability to create, update and delete their fundraisers.
    - Their main goal is to create fundraisers to support their in-game ambitions, custom maps or rule variations and view their resource goals.

- Catan supporters
    - Authenticated users.
    - They have the ability to create pledges.
    - Their main goal is to support fundraisers by pledging their resources.

- Catan visitors are
    - Unauthenticated users.
    - They have the ability to view fundraisers and pledges.
    - Their main goal is to view the fundraisers as a whole and in detail.

## Front End Pages/Functionality

- Home Page
    - Functionality
        - View all fundraisers in tile formats
        - Navigate to Login Page via link
        - Navigate to respective fundraiser details page by clicking on tile
    - Front End Elements
        - Fundraiser tiles
        - Fundraiser photos
        - Fundraiser truncated description (60-100 characters)
        - Link to Login Page

- Fundraiser Details Page
    - Functionality
        - View pledges, fundraiser photo, fundraiser short description and fundraiser status bar showing resources raised and ideal resources goal
        - Create pledges
    - Front End Elements
        - Fundraiser title
        - Fundraiser photo
        - Fundraiser short description
        - Funraiser status bar showing amount raised and target goal
        - Side section on making pledges 
            - Name field (Mandatory)
            - Amount field (Mandatory)
            - Description field (Optional)
            - Create pledge button
            - Status message indicating saved pledge is successful

- Login Page
    - Functionality
        - Login with account credentials
    - Front End Elements
        - Username field
        - Password field
        - Login button
        - Error message for wrong credentials entered

- Sign-up Page
    - Functionality
        - Create account for access to authenticated sections
    - Front End Elements
        - Username field
        - Email fields
        - Password field
        - Sign up button


## Screenshots

Homepage
![Homepage](.screenshots/homepage.png)

Fundraiser with pledges
![Fundraiser with pledges](.screenshots/fundraiser_form_and_create_page.png)

Create Fundraiser form
![Create Fundraiser form](.screenshots/create_fundraiser_form.png)

