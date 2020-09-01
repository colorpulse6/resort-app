import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Dolore occaecat esse deserunt non consequat deserunt cillum Lorem velit.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Dolore occaecat esse deserunt non consequat deserunt cillum Lorem velit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Dolore occaecat esse deserunt non consequat deserunt cillum Lorem velit.",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Dolore occaecat esse deserunt non consequat deserunt cillum Lorem velit.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
            {this.state.services.map((item, i)=> {
                return <article key={i} className="service">
                    <article>{item.icon}</article>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
