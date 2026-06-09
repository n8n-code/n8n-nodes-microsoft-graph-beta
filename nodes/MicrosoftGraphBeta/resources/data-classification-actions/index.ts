import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification Exact Match Data Stores Exact Match Data Store Lookup",
					"value": "Data Classification Exact Match Data Stores Exact Match Data Store Lookup",
					"action": "Invoke action lookup",
					"description": "Invoke action lookup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/microsoft.graph.lookup"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Cancel",
					"value": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Commit",
					"value": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Commit",
					"action": "Invoke action commit",
					"description": "Invoke action commit",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/microsoft.graph.commit"
						}
					}
				},
				{
					"name": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Renew",
					"value": "Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Renew",
					"action": "Invoke action renew",
					"description": "Invoke action renew",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/exactMatchDataStores/{{$parameter[\"exactMatchDataStore-id\"]}}/sessions/{{$parameter[\"exactMatchSession-id\"]}}/microsoft.graph.renew"
						}
					}
				},
				{
					"name": "Data Classification Classify Exact Matches",
					"value": "Data Classification Classify Exact Matches",
					"action": "Invoke action classifyExactMatches",
					"description": "Invoke action classifyExactMatches",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/microsoft.graph.classifyExactMatches"
						}
					}
				},
				{
					"name": "Data Classification Classify File",
					"value": "Data Classification Classify File",
					"action": "Invoke action classifyFile",
					"description": "Invoke action classifyFile",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/microsoft.graph.classifyFile"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Evaluate",
					"value": "Data Classification Sensitivity Labels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/sensitivityLabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"value": "Data Classification Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/microsoft.graph.evaluate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/microsoft.graph.lookup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Lookup"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Lookup"
					]
				}
			}
		},
		{
			"displayName": "Result Column Names",
			"name": "resultColumnNames",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "resultColumnNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Lookup"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Lookup"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/microsoft.graph.commit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Commit"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/microsoft.graph.renew",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Exact Match Data Stores Exact Match Data Store Sessions Exact Match Session Renew"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/microsoft.graph.classifyExactMatches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify Exact Matches"
					]
				}
			}
		},
		{
			"displayName": "Content Classifications",
			"name": "contentClassifications",
			"type": "json",
			"default": "[\n  {\n    \"matches\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "contentClassifications",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify Exact Matches"
					]
				}
			}
		},
		{
			"displayName": "Sensitive Type Ids",
			"name": "sensitiveTypeIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sensitiveTypeIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify Exact Matches"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify Exact Matches"
					]
				}
			}
		},
		{
			"displayName": "Timeout In Ms",
			"name": "timeoutInMs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "timeoutInMs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify Exact Matches"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/microsoft.graph.classifyFile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify File"
					]
				}
			}
		},
		{
			"displayName": "File",
			"name": "file",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify File"
					]
				}
			}
		},
		{
			"displayName": "Sensitive Type Ids",
			"name": "sensitiveTypeIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sensitiveTypeIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Classify File"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Actions"
					],
					"operation": [
						"Data Classification Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
];
