import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import confLogo from "../images/platziconf-logo.svg";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-12 mb-4 text-center">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-lg-6 col-xs-12 text-center BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-xs-12 mb-4">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col-lg-6 col-xs-12 mb-4">
            <h2>Actions</h2>
            <div>
              <Link
                to={`/badges/${badge.id}/edit`}
                className="btn btn-primary mb-4"
              >
                Edit
              </Link>
            </div>

            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
