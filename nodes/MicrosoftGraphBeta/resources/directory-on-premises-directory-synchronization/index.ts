import type { INodeProperties } from 'n8n-workflow';

export const directoryOnPremisesDirectorySynchronizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					]
				}
			},
			"options": [
				{
					"name": "Directory List On Premises Synchronization",
					"value": "Directory List On Premises Synchronization",
					"action": "Get onPremisesSynchronization from directory",
					"description": "A container for on-premises directory synchronization functionalities that are available for the organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/onPremisesSynchronization"
						}
					}
				},
				{
					"name": "Directory Create On Premises Synchronization",
					"value": "Directory Create On Premises Synchronization",
					"action": "Create new navigation property to onPremisesSynchronization for directory",
					"description": "Create new navigation property to onPremisesSynchronization for directory",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/onPremisesSynchronization"
						}
					}
				},
				{
					"name": "Directory Delete On Premises Synchronization",
					"value": "Directory Delete On Premises Synchronization",
					"action": "Delete navigation property onPremisesSynchronization for directory",
					"description": "Delete navigation property onPremisesSynchronization for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/onPremisesSynchronization/{{$parameter[\"onPremisesDirectorySynchronization-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get On Premises Synchronization",
					"value": "Directory Get On Premises Synchronization",
					"action": "Get onPremisesSynchronization from directory",
					"description": "A container for on-premises directory synchronization functionalities that are available for the organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/onPremisesSynchronization/{{$parameter[\"onPremisesDirectorySynchronization-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update On Premises Synchronization",
					"value": "Directory Update On Premises Synchronization",
					"action": "Update the navigation property onPremisesSynchronization in directory",
					"description": "Update the navigation property onPremisesSynchronization in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/onPremisesSynchronization/{{$parameter[\"onPremisesDirectorySynchronization-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/onPremisesSynchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory List On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/onPremisesSynchronization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Create On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/onPremisesSynchronization<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Create On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Delete On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Delete On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Get On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Get On Premises Synchronization"
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
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Get On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Update On Premises Synchronization"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/onPremisesSynchronization/{onPremisesDirectorySynchronization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory On Premises Directory Synchronization"
					],
					"operation": [
						"Directory Update On Premises Synchronization"
					]
				}
			}
		},
];
