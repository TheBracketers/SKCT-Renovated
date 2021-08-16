import React, { FC } from "react";
import MenuItem from "./MenuItem";
import SecondaryMenuItem from "./SecondaryMenuItem";

function Menu() {
  return (
    <div className="space-y divide-y px-2 ipad-pro:px-8  ">
      <MenuItem href="about" name="About">
        <SecondaryMenuItem
          href=""
          name="Vision and Mission"
          className="px-0 py-3"
        />
        <SecondaryMenuItem href="" name="Management" className="px-0 py-3" />
        <SecondaryMenuItem
          href=""
          name="Governing Body Members"
          className="px-0 py-3"
        />
        <SecondaryMenuItem
          href=""
          name="Approvals and Accreditation"
          className="px-0 py-3"
        />
        <SecondaryMenuItem
          href=""
          name="Eminent Visitors @SKCT"
          className="px-0 py-3"
        />
        <SecondaryMenuItem href="" name="Media @SKCT" className="px-0 py-3" />
        <SecondaryMenuItem
          href=""
          name="Daily News Letter @SKCT"
          className="px-0 py-3"
        />
      </MenuItem>
      <MenuItem href="academics" name="Academics">
        <SecondaryMenuItem href="" name="Department" className="px-0 py-3" />
        <SecondaryMenuItem
          href=""
          name="Academic Calender"
          className="px-0 py-3"
        />
        <SecondaryMenuItem
          href=""
          name="Professional Association"
          className="px-0 py-3"
        />
        <SecondaryMenuItem
          href=""
          name="PRIDE/Competitions"
          className="px-0 py-3"
        />
        <SecondaryMenuItem
          href=""
          name="Google Classroom"
          className="px-0 py-3"
        />
      </MenuItem>
      <MenuItem href="R&D" name="Research & Work">
        <SecondaryMenuItem href="" name="Centre of R&D" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="IPR Cell" className="px-0 py-3" />
        <SecondaryMenuItem
          href=""
          name="Funded Projects"
          className="px-0 py-3"
        />
        <SecondaryMenuItem href="" name="IIC" className="px-0 py-3" />
      </MenuItem>

      <MenuItem href="campus-life" name="Campus Life">
        <SecondaryMenuItem href="" name="Facilities" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="Library" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="Sports" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="Hostel" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="NSS/YRC" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="Gallery" className="px-0 py-3" />
      </MenuItem>
      <MenuItem href="outcomes" name="Outcomes">
        <SecondaryMenuItem
          href=""
          name="Placement Cell"
          className="px-0 py-3"
        />
        <SecondaryMenuItem href="" name="Recruiters" className="px-0 py-3" />
        <SecondaryMenuItem href="" name="Training" className="px-0 py-3" />
      </MenuItem>
      <MenuItem href="admissions" name="Admission"></MenuItem>
      <SecondaryMenuItem href="" name="Students"></SecondaryMenuItem>
      <SecondaryMenuItem href="" name="Parents"></SecondaryMenuItem>
      <SecondaryMenuItem href="" name="Alumni"></SecondaryMenuItem>
      <SecondaryMenuItem href="" name="faculty"></SecondaryMenuItem>
      <SecondaryMenuItem href="" name="Staff"></SecondaryMenuItem>
    </div>
  );
}

export default Menu;
