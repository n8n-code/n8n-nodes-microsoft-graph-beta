import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationSensitivityLabelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification List Sensitivity Labels",
					"value": "Data Classification List Sensitivity Labels",
					"action": "Get sensitivityLabels from dataClassification",
					"description": "Get sensitivityLabels from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitivityLabels"
						}
					}
				},
				{
					"name": "Data Classification Create Sensitivity Labels",
					"value": "Data Classification Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for dataClassification",
					"description": "Create new navigation property to sensitivityLabels for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/sensitivityLabels"
						}
					}
				},
				{
					"name": "Data Classification Delete Sensitivity Labels",
					"value": "Data Classification Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for dataClassification",
					"description": "Delete navigation property sensitivityLabels for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Get Sensitivity Labels",
					"value": "Data Classification Get Sensitivity Labels",
					"action": "Get sensitivityLabels from dataClassification",
					"description": "Get sensitivityLabels from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Update Sensitivity Labels",
					"value": "Data Classification Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in dataClassification",
					"description": "Update the navigation property sensitivityLabels in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels List Sublabels",
					"value": "Data Classification Sensitivity Labels List Sublabels",
					"action": "Get sublabels from dataClassification",
					"description": "Get sublabels from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Create Sublabels",
					"value": "Data Classification Sensitivity Labels Create Sublabels",
					"action": "Create new navigation property to sublabels for dataClassification",
					"description": "Create new navigation property to sublabels for dataClassification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Delete Sublabels",
					"value": "Data Classification Sensitivity Labels Delete Sublabels",
					"action": "Delete navigation property sublabels for dataClassification",
					"description": "Delete navigation property sublabels for dataClassification",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Get Sublabels",
					"value": "Data Classification Sensitivity Labels Get Sublabels",
					"action": "Get sublabels from dataClassification",
					"description": "Get sublabels from dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Data Classification Sensitivity Labels Update Sublabels",
					"value": "Data Classification Sensitivity Labels Update Sublabels",
					"action": "Update the navigation property sublabels in dataClassification",
					"description": "Update the navigation property sublabels in dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Delete Sublabels"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Delete Sublabels"
					]
				}
			}
		},
		{
			"displayName": "GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Sensitivity Label"
					],
					"operation": [
						"Data Classification Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
];
