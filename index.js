// JSX
function Wrapper(props) {
    return <div className="wrapper">
        {props.children}
    </div>
}
function TextArea() {
    return <textarea className="textarea"></textarea>
}
function Button(props) {
    let buttonClass = "button";
    if (props.wide) buttonClass += " button--wide"
    if (props.color == 'black') buttonClass += " button--black"
    if (props.color == 'orange') buttonClass += " button--orange"
    if (props.color == 'gray') buttonClass += " button--gray"
    return <button className={buttonClass}>{props.value}</button>
}
function ButtonsBlock(props) {
    return <div className="button-block">
        {props.children}
    </div>
}
function ButtonsNumbers(props) {
    return <div className="button-block__numbers">
        {props.children}

    </div>
}
function ButtonsOperators(props) {
    return <div className="button-block__operators">
        {props.children}

    </div>
}



let page =
    <Wrapper>
        <TextArea />
        <ButtonsBlock>
            <ButtonsNumbers>
                <Button color="gray" value="AC" />
                <Button color="gray" value="+/-" />
                <Button color="gray" value="%" />
                <Button color="black" value="7" />
                <Button color="black" value="8" />
                <Button color="black" value="9" />
                <Button color="black" value="4" />
                <Button color="black" value="5" />
                <Button color="black" value="6" />
                <Button color="black" value="1" />
                <Button color="black" value="2" />
                <Button color="black" value="3" />
                <Button wide="true" color="black" value="0" />
                <Button color="black" value="," />


            </ButtonsNumbers>
            <ButtonsOperators>
                <Button color="orange" value="÷" />
                <Button color="orange" value="×" />
                <Button color="orange" value="-" />
                <Button color="orange" value="+" />
                <Button color="orange" value="=" />
            </ButtonsOperators>
        </ButtonsBlock>
    </Wrapper>
// 
ReactDOM.render(page, document.getElementById('react-root'));