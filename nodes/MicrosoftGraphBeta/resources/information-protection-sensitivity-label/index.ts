import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionSensitivityLabelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection List Sensitivity Labels",
					"value": "Information Protection List Sensitivity Labels",
					"action": "Get sensitivityLabels from informationProtection",
					"description": "Get sensitivityLabels from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Information Protection Create Sensitivity Labels",
					"value": "Information Protection Create Sensitivity Labels",
					"action": "Create new navigation property to sensitivityLabels for informationProtection",
					"description": "Create new navigation property to sensitivityLabels for informationProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/sensitivityLabels"
						}
					}
				},
				{
					"name": "Information Protection Delete Sensitivity Labels",
					"value": "Information Protection Delete Sensitivity Labels",
					"action": "Delete navigation property sensitivityLabels for informationProtection",
					"description": "Delete navigation property sensitivityLabels for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Get Sensitivity Labels",
					"value": "Information Protection Get Sensitivity Labels",
					"action": "Get sensitivityLabels from informationProtection",
					"description": "Get sensitivityLabels from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Update Sensitivity Labels",
					"value": "Information Protection Update Sensitivity Labels",
					"action": "Update the navigation property sensitivityLabels in informationProtection",
					"description": "Update the navigation property sensitivityLabels in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels List Sublabels",
					"value": "Information Protection Sensitivity Labels List Sublabels",
					"action": "Get sublabels from informationProtection",
					"description": "Get sublabels from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Create Sublabels",
					"value": "Information Protection Sensitivity Labels Create Sublabels",
					"action": "Create new navigation property to sublabels for informationProtection",
					"description": "Create new navigation property to sublabels for informationProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Delete Sublabels",
					"value": "Information Protection Sensitivity Labels Delete Sublabels",
					"action": "Delete navigation property sublabels for informationProtection",
					"description": "Delete navigation property sublabels for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Get Sublabels",
					"value": "Information Protection Sensitivity Labels Get Sublabels",
					"action": "Get sublabels from informationProtection",
					"description": "Get sublabels from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Update Sublabels",
					"value": "Information Protection Sensitivity Labels Update Sublabels",
					"action": "Update the navigation property sublabels in informationProtection",
					"description": "Update the navigation property sublabels in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/{{$parameter[\"sensitivityLabel-id1\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection List Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Create Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Delete Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Delete Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Get Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Get Sensitivity Labels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Get Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Update Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels List Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Create Sublabels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Delete Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Delete Sublabels"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Get Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Get Sublabels"
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
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Get Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Label"
					],
					"operation": [
						"Information Protection Sensitivity Labels Update Sublabels"
					]
				}
			}
		},
];
