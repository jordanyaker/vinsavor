function handleSetStyle(event) {
    this.setState({style: event.target.value});
    this.setState({primaryColor: ''});
}

export default handleSetStyle;
