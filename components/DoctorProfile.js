import React from "react"
import Profile from "./Profile"
import Address from "./Address"

export default function DoctorProfile({ doctor }) {
  return [
    <Profile key="0" subject={doctor} />,
    <Address key="1" address={doctor.address} />
  ]
}
