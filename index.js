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
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button wide="true" color="black" value="Hi Mike" />
                <Button />


            </ButtonsNumbers>
            <ButtonsOperators>
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
            </ButtonsOperators>
        </ButtonsBlock>
    </Wrapper>
// 
ReactDOM.render(page, document.getElementById('react-root'));