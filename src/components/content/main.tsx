import React, { useEffect, useState } from "react";
 import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions as parametersActions } from "../../../src/store/modules/baconipsum/slice";
import { actions as jsonActions } from "../../../src/store/modules/jsonPlaceholder/slice";

import {
  selectParametersData,
  selectParametersError,
  selectParametersLoading,
} from "../../store/modules/baconipsum/selector";
import { Container, RegForm, Wrapper } from "../../utils/style";
import InputValue from "../../components/InputValue/inputValue";
import {
  selectJsonData,
  selectJsonDataCount,
  selectJsonDone,
} from "../../store/modules/jsonPlaceholder/selector";
import { JsonPlaceholderStateData } from "../../store/modules/jsonPlaceholder/types";
import { MeStateData } from "../../store/modules/me/types";
import { selectMeDone, selectMeData } from "../../store/modules/me/selector";

function Main (){
    const [items, setItems] = useState([]);
    const [sentencesVal, setSentences] = useState(0);
  
    const dispatch = useDispatch();
    const data = useSelector(selectParametersData);
    const statisticsDataLoading = useSelector(selectParametersLoading);
    const dataError = useSelector(selectParametersError);
    const jsonDataCount = useSelector(selectJsonDataCount);
    const jsonPlaceholder = useSelector(selectJsonData);
    const jsonDone = useSelector(selectJsonDone);
    // const meInfoDone = useSelector(selectMeDone);
    // console.log(selectMeData);
  
    useEffect(() => {
      jsonDone && dispatch(jsonActions.setJsonDataCount(jsonDataCount + 10));
    }, [jsonDone]);
  
    // const [jsonDataCount, setJsonDataCount] = useState(10);
  
    const handleButtonClick = () => {
      let input = prompt("Enter a value:");
  
      if (input && Number(input) > 0) {
        setSentences(Number(input));
  
        dispatch(
          parametersActions.fetchDataTrigger({
            paras: 2,
            sentences: Number(input),
          })
        );
  
        // eslint-disable-next-line no-lone-blocks
      } else {
        alert("число більше 0!");
      }
    };
    console.log(jsonDataCount);
    function plusCount() {
      // eslint-disable-next-line no-lone-blocks
      {
        // dispatch(
        // jsonActions.setJsonDataCount(jsonDataCount+10)
        // );
        // console.log(jsonDataCount);
  
        dispatch(
          jsonActions.fetchDataTrigger({
            start: jsonDataCount,
          })
          
        );
     
      }
    }
  


    return (
      <div className="App">
        <Container>
          <Wrapper>
            {dataError && <h1>Error</h1>}
            <InputValue
              sentencesVal={sentencesVal}
              handleButtonClick={handleButtonClick}
            ></InputValue>
  
            {statisticsDataLoading ? <h1>Loading ...</h1> : <></>}
            {data && data.length ? <h1>{data[0]}</h1> : <></>}
            <div>
              <ol>
                {jsonPlaceholder &&
                  jsonPlaceholder.map((item: JsonPlaceholderStateData, index) => (
                    <li key={index}>
                      {" "}
                      <p>{item.title}</p>
                    </li>
                  ))}
              </ol>
            </div>
            {jsonDataCount <= 50 ? (
              <button onClick={plusCount}>
                {jsonDataCount === 10 ? "Показати перші 10" : "Показати ще"}
              </button>
            ) : (
              <></>
            )}

          
          </Wrapper>
        </Container>
      </div>
    );
}

export default Main