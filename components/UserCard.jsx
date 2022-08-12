import React from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { useState } from "react";
import UserCardDetail from "../components/UserCardDetail";

export default function UserCard(props) {
  const [isClick, setClick] = useState(false);
  return (
    <div className="border-bottom" onClick={() => setClick(!isClick)}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.pic} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {isClick ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isClick && (
        <UserCardDetail
          key={props.email}
          email={props.email}
          adress={props.adress}
        />
      )}
      {/* UserCardDetail is hidden */}
    </div>
  );
}
