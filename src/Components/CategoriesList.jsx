import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsCategories: [],
    };
    this.callsApi = this.callsApi.bind(this);
  }

  componentDidMount() {
    this.callsApi();
  }

  async callsApi() {
    const displayCategories = await getCategories();
    this.setState({
      itemsCategories: displayCategories,
    });
  }

  render() {
    const { itemsCategories } = this.state;
    const { onClick } = this.props;

    return (
      <section>
        <ul>
          { itemsCategories.map((categorie) => (
            <div key={ categorie.id }>
              <label htmlFor="categories">
                <input
                  type="radio"
                  name="categoria"
                  id={ categorie.id }
                  data-testid="category"
                  key={ categorie.name }
                  onClick={ onClick }
                />
                { categorie.name }
              </label>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func,
}.isRequirement;

export default CategoriesList;
