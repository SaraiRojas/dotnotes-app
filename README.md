[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SaraiRojas/dotnotes-app">
    <img src="assets/DotNotes.logoDots.png" alt="Logo" width="250">
  </a>
  <br />
  <br />
  <p align="center">
    Notes Web App with MySQL + Node + Express as backend,  Auth0 as authentication manager and React + Typescipt + Sass as frontend
    <br />
    <a href="https://github.com/SaraiRojas/dotnotes-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SaraiRojas/dotnotes-app">View Demo</a>
    ·
    <a href="https://github.com/SaraiRojas/dotnotes-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/SaraiRojas/dotnotes-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Web Notes appication. It allows de creation of a profile where notes can be created, edited and deleted if needed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![MySQL][MySQL]][MySQL-url]
* [![Express][Express]][Express-url]
* [![Node.js][Node.js]][Node.js-url]
* [![Docker][Docker]][Docker-url]
* [![React][React.js]][React-url]
<!-- * [![Vue][Vue.js]][Vue-url] -->
<!-- * [![Angular][Angular.io]][Angular-url] -->
<!-- * [![Svelte][Svelte.dev]][Svelte-url] -->
<!-- * [![Laravel][Laravel.com]][Laravel-url] -->
<!-- * [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
<!-- * [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally. -->
To get a local copy up and running follow these simple example steps.

### Prerequisites

Install docker on your machine following the steps from their webpage [Docker-url].

OPTIONAL:

* Install MySQL client following the steps on [MySQL-Client](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing).
<!-- * docker config file checkup
  ```bash
  docker compose config
  ```
* docker build services
  ```bash
  docker compose up -d --build
  ```
* docker view -->

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/SaraiRojas/dotnotes-app.git
   ```

2. Review the docker compose config file

   ```sh
   docker compose config
   ```

3. Create docker containers

   ```sh
   docker compose up -d --build
   ```

4. Review services
    * 3 services should be UP

        ```sh
        docker ps
        ```

    * OPTIONAL: check mysqldb connection

        ```sh
        mysql -h localhost -P 3306 --protocol=tcp -uadmin -p
        ```

5. OPTIONAL: Check containers logs

    ```sh
    docker logs <container-name>
    ```

6. SHUTDOWN containers.

    ```sh
    docker compose down
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [ ] Feature 1
* [ ] Feature 2
* [ ] Feature 3
  * [ ] Nested Feature

See the [open issues](https://github.com/SaraiRojas/dotnotes-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/SaraiRojas/dotnotes-app](https://github.com/SaraiRojas/dotnotes-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/SaraiRojas/dotnotes-app.svg?style=for-the-badge
[contributors-url]: https://github.com/SaraiRojas/dotnotes-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SaraiRojas/dotnotes-app.svg?style=for-the-badge
[forks-url]: https://github.com/SaraiRojas/dotnotes-app/network/members
[stars-shield]: https://img.shields.io/github/stars/SaraiRojas/dotnotes-app.svg?style=for-the-badge
[stars-url]: https://github.com/SaraiRojas/dotnotes-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/SaraiRojas/dotnotes-app.svg?style=for-the-badge
[issues-url]: https://github.com/SaraiRojas/dotnotes-app/issues
[license-shield]: https://img.shields.io/github/license/SaraiRojas/dotnotes-app.svg?style=for-the-badge
[license-url]: https://github.com/SaraiRojas/dotnotes-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: http://expressjs.com/
[MySQL]: https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=4FC08D
[MySQL-url]: https://www.mysql.com/
[Node.js]:https://img.shields.io/badge/NodeJs-20232A?style=for-the-badge&logo=nodedotjs&logoColor=61DAFB
[Node.js-url]: https://nodejs.org/es/
[Docker]: https://img.shields.io/badge/Docker-35495E?style=for-the-badge&logo=docker&logoColor=4FC08D
[Docker-url]: https://www.docker.com/
[Typescript]: