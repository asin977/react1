function welcome(props) {
    return <h1>Hello,{props.name}</h1>
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} </h1>;
    }
}

var array1 = [1,2,4,5];

const map1 = array1.map(x => x * 2);
console.log(map1);

