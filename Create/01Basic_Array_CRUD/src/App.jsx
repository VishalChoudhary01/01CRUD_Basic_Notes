import BasicArray from "./component/Create/Array_Different_State/BasicArray";
import SomeObjectPush from "./component/Create/Array_Different_State/SomeObjectPush";
import SingleStateForm from "./component/Create/Array_Different_State/SingleStateForm";
import FormHandle_useRef from "./component/Create/FormHandle_useRef";
import Form_UseEffectEVENT from "./component/Create/Array_Different_State/Form_UseEffectEVENT";
import LocalStorageCreate_Read from "./component/Create/Array_Different_State/LocalStorageCreate_Read";
import store from "./component/redux_Array_Create/store/store";
import { Provider } from "react-redux";
import Redux_Array_Create from "./component/redux_Array_Create/Redux_Array_Create";
function App() {
  return (
    <>
    <Provider store={store}>
      {/* <BasicArray /> */}
      {/* <SomeObjectPush/> */}
      {/* <SingleStateForm/> */}
      {/* <FormHandle_useRef/> */}
      {/* <Form_UseEffectEVENT/> */}
      {/* <LocalStorageCreate_Read/> */}
<Redux_Array_Create/>
    </Provider>
    </>
  );
}

export default App;
