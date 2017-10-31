/**
 * @flow
 * @relayHash d405a7a530fe4b388a320ef7e401d2de
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppListPageQueryResponse = {|
  +companies: ?{| |};
|};
*/


/*
query AppListPageQuery(
  $sector_contains: String
) {
  companies {
    ...ListPage_companies_30DBNc
  }
}

fragment ListPage_companies_30DBNc on CompanyConnection {
  edges {
    node {
      id
      ...Company_company
    }
  }
}

fragment Company_company on Company {
  id
  description
  url
  logo
  name
  tranch
  sector
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "sector_contains",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "CompanyConnection",
        "name": "companies",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListPage_companies",
            "args": [
              {
                "kind": "Variable",
                "name": "sector_contains",
                "variableName": "sector_contains",
                "type": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppListPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "sector_contains",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AppListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "CompanyConnection",
        "name": "companies",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CompanyEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Company",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "logo",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "tranch",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "sector",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppListPageQuery(\n  $sector_contains: String\n) {\n  companies {\n    ...ListPage_companies_30DBNc\n  }\n}\n\nfragment ListPage_companies_30DBNc on CompanyConnection {\n  edges {\n    node {\n      id\n      ...Company_company\n    }\n  }\n}\n\nfragment Company_company on Company {\n  id\n  description\n  url\n  logo\n  name\n  tranch\n  sector\n}\n"
};

module.exports = batch;
