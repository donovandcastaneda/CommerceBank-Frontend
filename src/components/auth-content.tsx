import * as React from "react";
import { request } from "@/lib/helpers/fetch-helper";

// Define the type for your component's state
interface State {
  data: any[]; 
}

//for later
interface Props {}

export default class AuthContext extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    request("GET", "/messages", {}).then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.data && this.state.data.map((line: any, index: number) => <p key={index}>{line}</p>)}
      </div>
    );
  }
}
