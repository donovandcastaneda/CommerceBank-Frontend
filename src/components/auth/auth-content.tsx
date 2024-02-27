import * as React from "react";
import { request } from "@/lib/helpers/fetch-helper";

// Define the type for your component's state
interface State {
  data: any[]; 
}

//for later
interface Props {}

export default class AuthContent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount(): void {
    request("GET", "/messages", {})
      .then((response) => {
        console.log("Response data:", response); // Log to check the structure
        this.setState({ data: response});
      })
      .catch((error) => {
        console.error("An error occurred:", error); // Error handling
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
