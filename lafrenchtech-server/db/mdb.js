// flow
const { ObjectID } = require("mongodb");

function buildFilters({ OR = [], description_contains, sector_contains }) {
  const filter =
    description_contains || sector_contains || check_query ? {} : null;
  if (description_contains) {
    filter.description = { $regex: `.*${description_contains}.*` };
  }
  if (sector_contains) {
    filter.url = { $regex: `.*${sector_contains}.*` };
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
