function AccordionItem({title, content, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          onClick={onClick}
        >
          {title}
        </button>
      </h2>

      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">
          {content}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
