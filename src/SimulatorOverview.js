const SimulatorOverview = () => {
  return (
    <>
      <h2>Overview</h2>
      <p>
        This is a crude mental model conceptualisation of a software team
        delivering 'value' to customers of their application. It tries to map
        the interconnectedness and conflict between investing in features versus
        infrastructure, whilst trying to build a high customer satisfaction for
        the service at hand.
      </p>
      <h2>How to play</h2>
      <p>
        The goal of the simulator is to try and maintain a high{" "}
        <strong className="overview__customer-satisfaction">
          customer satisfaction score
        </strong>
        .
      </p>
      <p>
        This score starts with a Neutral rating and gradually decreases. This
        decrease starts with 1.5 second intervals, but can become faster or
        slower depending on what you invest in. Ultimately, if the satisfaction
        score reaches 0 (called "Despondent"), you lose the game.
      </p>
      <p>
        To improve satisfaction, you must spend{" "}
        <strong className="overview__capability">Capability Points</strong> on{" "}
        <strong className="overview__feature">Features</strong> and/or{" "}
        <strong className="overview__infrastructure">Infrastructure</strong>.
      </p>
      <p>
        When you invest your{" "}
        <strong className="overview__capability">Capability Points</strong> into
        either areas, the{" "}
        <strong className="overview__customer-satisfaction">
          customer satisfaction score
        </strong>{" "}
        increases! <strong className="overview__feature">Features</strong>{" "}
        increase satisfaction much more than{" "}
        <strong className="overview__infrastructure">Infrastructure</strong>, so
        it stands to reason that you'd wanna focus all your attention on
        increasing your feature value, right?
      </p>
      <p>
        Well, not quite. Increasing your{" "}
        <strong className="overview__feature">Features</strong> value has an
        adverse effect on the amount of clicks required to generate{" "}
        <strong className="overview__capability">Capability Points</strong>. The
        more
        <strong className="overview__feature"> Features</strong> you have, the
        more <strong className="overview__capability">Capability Points</strong>{" "}
        are needed to increase it.
      </p>
      <p>And what's more, having a ton of features without necessary infrastructure investment can increase the speed in which customer satisfaction decreases.</p>
      <p>
        To counteract this, you need to also spend your{" "}
        <strong className="overview__capability">Capability Points</strong> on{" "}
        <strong className="overview__infrastructure">Infrastructure</strong>.{" "}
        <strong className="overview__infrastructure">Infrastructure</strong>{" "}
        accounts for all the good dev stuff you want to have to maximise the
        work environment: this would be work in and around CI/CD pipelines, team culture and
        delivery practices, testing automation etc etc.
      </p>
      <p>
        <strong className="overview__infrastructure">Infrastructure</strong>{" "}
        requires far more{" "}
        <strong className="overview__capability">Capability Points</strong> than
        a <strong className="overview__feature">Features </strong>
        upgrade generally would, but increasing it will ensure your{" "}
        <strong className="overview__capability">Capability Points</strong>{" "}
        generation and <strong className="overview__feature">Features</strong>{" "}
        upgrade costs won't become too excessive, whilst also slowing down the speed in which customer satisfaction decreases.
      </p>
    </>
  );
};

export default SimulatorOverview;
