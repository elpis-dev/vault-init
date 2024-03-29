var socket = new WebSocket("ws://localhost:4000");

const App = () => {
    const [steps, setSteps] = React.useState({});

    socket.onmessage = function(event) {
        setSteps(JSON.parse(event.data));
    };

    return (
        <Steps>
            <Step title={i18next.t("step.init.title")}
                  type={steps.init ? steps.init.state : StepType.none}
                  description={steps.init && steps.init.state === "failed" && steps.init.trace ? steps.init.trace : i18next.t("step.init.description")} />
            <Step title={i18next.t("step.up.title")}
                  type={steps.up ? steps.up.state : StepType.none}
                  description={steps.init && steps.up.state === "failed" && steps.up.trace ? steps.up.trace : i18next.t("step.up.description")} />
            <Step title={i18next.t("step.auth.title")}
                  type={steps.auth ? steps.auth.state : StepType.none}
                  description={steps.init && steps.auth.state === "failed" && steps.auth.trace ? steps.auth.trace : i18next.t("step.auth.description")} />
            <Step title={i18next.t("step.secret.title")}
                  type={steps.secret ? steps.secret.state : StepType.none}
                  description={steps.secret && steps.secret.state === "failed" && steps.secret.trace ? steps.secret.trace : i18next.t("step.secret.description")} />
            <Step title={i18next.t("step.policy.title")}
                  type={steps.policy ? steps.policy.state : StepType.none}
                  description={steps.policy && steps.policy.state === "failed" && steps.policy.trace ? steps.policy.trace : i18next.t("step.policy.description")} />
            <Step title={i18next.t("step.role.title")}
                  type={steps.role ? steps.role.state : StepType.none}
                  description={steps.role && steps.role.state === "failed" && steps.role.trace ? steps.role.trace : i18next.t("step.role.description")} />
            <Step title={i18next.t("step.clean.title")}
                  type={steps.clean ? steps.clean.state : StepType.none}
                  description={steps.clean && steps.clean.state === "failed" && steps.clean.trace ? steps.clean.trace : i18next.t("step.clean.description")} />
        </Steps>
     );
};
  
ReactDOM.render(<App/>, document.getElementById("app"));