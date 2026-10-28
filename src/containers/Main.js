import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ym from "react-yandex-metrika";
import CookieConsent from "../components/cookieConsent/CookieConsent";
import ArchiveDetails from "../pages/archive/ArchiveDetails";
import GalleryAlbum from "../pages/opensource/GalleryAlbum";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import MusicianPage from "../pages/musician/MusicianPage.js";

export default class Main extends Component {
  componentDidMount() {
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      this.props.theme.imageHighlight
    );

    // Подключаем автоматическую фиксацию просмотров при SPA-кликах по меню
    if (this.props.history) {
      this.unlisten = this.props.history.listen((location) => {
        ym("hit", location.pathname + location.search);
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.theme &&
      this.props.theme &&
      prevProps.theme.imageHighlight !== this.props.theme.imageHighlight
    ) {
      document.documentElement.style.setProperty(
        "--scrollbar-color",
        this.props.theme.imageHighlight
      );
    }
  }

  componentWillUnmount() {
    // Чистим слушатель истории при демонтировании компонента для защиты от утечек памяти
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/musicians/:id"
            render={(props) => (
              <MusicianPage {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/archive/:id"
            render={(props) => (
              <ArchiveDetails
                {...props}
                theme={this.props.theme}
                onToggle={this.props.onToggle} // Передали свойство от родителя к дочке
              />
            )}
          />
          <Route
            path="/gallery/:id"
            render={(props) => (
              <GalleryAlbum {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
        <CookieConsent theme={this.props.theme} />
      </BrowserRouter>
    );
  }
}
