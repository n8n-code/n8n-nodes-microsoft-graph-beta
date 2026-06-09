import type { INodeProperties } from 'n8n-workflow';

export const contractsContractDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					]
				}
			},
			"options": [
				{
					"name": "Contracts Contract List Contract",
					"value": "Contracts Contract List Contract",
					"action": "List contracts",
					"description": "Retrieve a list of contract objects associated to a partner tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contracts"
						}
					}
				},
				{
					"name": "Contracts Contract Create Contract",
					"value": "Contracts Contract Create Contract",
					"action": "Add new entity to contracts",
					"description": "Add new entity to contracts",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/contracts"
						}
					}
				},
				{
					"name": "Contracts Contract Delete Contract",
					"value": "Contracts Contract Delete Contract",
					"action": "Delete entity from contracts",
					"description": "Delete entity from contracts",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/contracts/{{$parameter[\"contract-id\"]}}"
						}
					}
				},
				{
					"name": "Contracts Contract Get Contract",
					"value": "Contracts Contract Get Contract",
					"action": "Get Contract",
					"description": "Retrieve the properties and relationships of contract object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contracts/{{$parameter[\"contract-id\"]}}"
						}
					}
				},
				{
					"name": "Contracts Contract Update Contract",
					"value": "Contracts Contract Update Contract",
					"action": "Update entity in contracts",
					"description": "Update entity in contracts",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/contracts/{{$parameter[\"contract-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract List Contract"
					]
				}
			}
		},
		{
			"displayName": "POST /contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Create Contract"
					]
				}
			}
		},
		{
			"displayName": "POST /contracts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Create Contract"
					]
				}
			}
		},
		{
			"displayName": "DELETE /contracts/{contract-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Delete Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Delete Contract"
					]
				}
			}
		},
		{
			"displayName": "GET /contracts/{contract-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Get Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Get Contract"
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
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Get Contract"
					]
				}
			}
		},
		{
			"displayName": "PATCH /contracts/{contract-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Update Contract"
					]
				}
			}
		},
		{
			"displayName": "PATCH /contracts/{contract-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contracts Contract"
					],
					"operation": [
						"Contracts Contract Update Contract"
					]
				}
			}
		},
];
