import React from "react";

class Categories extends React.Component {
    render() {
        const { catName } = this.props;
        return(
            <div data-testid="category">
                <p>
                    {catName}
                </p>
            </div>
        );
    }
}

export default Categories;