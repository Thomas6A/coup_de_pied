import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { TwitchEmbed } from "react-twitch-embed";

const Stream = () => {
  const { user } = useParams();
  return (
    <>
      <div>
        <TwitchEmbed
          channel={user}
          hideControls={false}
          width={"100%"}
          height={800}
        />
      </div>
      <div><Link><Button className="btn-danger">{user}</Button></Link></div>
    </>
  );
};

export default Stream;
