function handleSetStyle(event) {
    this.setState({style: event.target.value});
    this.setState({primaryColor: ''});
    this.setState({secondaryColor: ''});
}

export default handleSetStyle;
