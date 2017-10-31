/**
 * @flow
 * @relayHash cc5ec4e8931ed33900edfe0953238b1d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ListPageRefetchQueryResponse = {|
  +companies: ?{| |};
|};
*/


/*
query ListPageRefetchQuery(
  $count: Int
  $filter: CompanyFilter
) {
  companies {
    ...ListPage_companies_26eJ3g
  }
}

fragment ListPage_companies_26eJ3g on CompanyConnection {
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
        "name": "count",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "CompanyFilter",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListPageRefetchQuery",
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
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "filter",
                "variableName": "filter",
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
  "name": "ListPageRefetchQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "CompanyFilter",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ListPageRefetchQuery",
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
  "text": "query ListPageRefetchQuery(\n  $count: Int\n  $filter: CompanyFilter\n) {\n  companies {\n    ...ListPage_companies_26eJ3g\n  }\n}\n\nfragment ListPage_companies_26eJ3g on CompanyConnection {\n  edges {\n    node {\n      id\n      ...Company_company\n    }\n  }\n}\n\nfragment Company_company on Company {\n  id\n  description\n  url\n  logo\n  name\n  tranch\n  sector\n}\n"
};

module.exports = batch;
