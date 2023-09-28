import UseContextExample from "./type-react/context-api/UseContextExample";
import EventExample from "./type-react/react-event/EventExample";
import UseStateExample from "./type-react/use-state/UseStateExample";

const App = () => {
    return (
        <div className="p-10">
            <EventExample />
            <UseStateExample />
            <UseContextExample />
        </div>
    );
};

export default App;