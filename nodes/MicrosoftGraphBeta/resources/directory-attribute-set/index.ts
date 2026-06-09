import type { INodeProperties } from 'n8n-workflow';

export const directoryAttributeSetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Attribute Sets",
					"value": "Directory List Attribute Sets",
					"action": "List attributeSets",
					"description": "Get a list of the attributeSet objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/attributeSets"
						}
					}
				},
				{
					"name": "Directory Create Attribute Sets",
					"value": "Directory Create Attribute Sets",
					"action": "Create attributeSet",
					"description": "Create a new attributeSet object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/attributeSets"
						}
					}
				},
				{
					"name": "Directory Delete Attribute Sets",
					"value": "Directory Delete Attribute Sets",
					"action": "Delete navigation property attributeSets for directory",
					"description": "Delete navigation property attributeSets for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/attributeSets/{{$parameter[\"attributeSet-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Attribute Sets",
					"value": "Directory Get Attribute Sets",
					"action": "Get attributeSets from directory",
					"description": "Group of related custom security attribute definitions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/attributeSets/{{$parameter[\"attributeSet-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Attribute Sets",
					"value": "Directory Update Attribute Sets",
					"action": "Update the navigation property attributeSets in directory",
					"description": "Update the navigation property attributeSets in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/attributeSets/{{$parameter[\"attributeSet-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/attributeSets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory List Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/attributeSets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Create Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/attributeSets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Create Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/attributeSets/{attributeSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Delete Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Delete Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/attributeSets/{attributeSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Get Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Get Attribute Sets"
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
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Get Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/attributeSets/{attributeSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Update Attribute Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/attributeSets/{attributeSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Attribute Set"
					],
					"operation": [
						"Directory Update Attribute Sets"
					]
				}
			}
		},
];
