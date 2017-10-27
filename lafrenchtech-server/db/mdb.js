// flow
const { ObjectID } = require("mongodb");

function buildFilters({ OR = [], description_contains, url_contains }) {
  const filter =
    description_contains || url_contains || check_query ? {} : null;
  if (description_contains) {
    filter.description = { $regex: `.*${description_contains}.*` };
  }
  if (url_contains) {
    filter.url = { $regex: `.*${url_contains}.*` };
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(buildFilters(OR[i]));
  }
  return filters;
}

module.exports = db => ({
  buildFilters,
  async getCompanies() {
    return db
      .collection("companies")
      .find()
      .sort()
      .toArray();
  },

  async getCompany(company) {
    return db.collection("companies").findOne(ObjectID(company));
  }
});
