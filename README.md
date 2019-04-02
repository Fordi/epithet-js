# Epithet.js

A tiny library for putting you in your place.

Usage:

    import Epithet from 'epithet-js';

    console.log(Epithet());

    // > pie-eating boner waffle

    export class App extends React.Component {
      render() {
        return (
          <div className="command">
            {`Go away, you `}
            <Epithet />
          </div>
        );
      }
    }
