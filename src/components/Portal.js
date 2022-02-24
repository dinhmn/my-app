import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperElm = createPortalWrapper();

const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    //
    document.body.appendChild(portalWrapperElm);
    return () => {
      //
    };
  }, []);

  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassName}`}
      style={{
        containerStyle,
      }}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={onClose}
      ></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      ></div>
      {children}
    </div>
  );

  return createPortal(renderContent, portalWrapperElm);
};

Portal.prototype = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Portal;
