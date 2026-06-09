import type { INodeProperties } from 'n8n-workflow';

export const directoryObjectEndpointDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/owners/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedDevices/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/ownedDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/registeredDevices/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/registeredDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/ownedObjects/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 5 Bdf",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 5 Bdf",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/ownedObjects/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/owners/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/owners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredOwners/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredOwners/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredUsers/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/devices/{{$parameter[\"device-id\"]}}/registeredUsers/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedDevices/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/ownedDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3",
					"value": "Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3",
					"action": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"description": "Get the items of type microsoft.graph.endpoint in the microsoft.graph.directoryObject collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/registeredDevices/microsoft.graph.endpoint"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3",
					"value": "Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3",
					"action": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"description": "Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/registeredDevices/{{$parameter[\"directoryObject-id\"]}}/microsoft.graph.endpoint"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/owners/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 8 A 4 F"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/owners/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 A 4 F"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredOwners/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 4 Ed 3"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 4 Ed 3"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredUsers/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint C 508"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint C 508"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Abb 8"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Abb 8"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 2 Ff"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 2 Ff"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedDevices/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint F 242"
					]
				}
			}
		},
		{
			"displayName": "GET /me/ownedDevices/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint F 7 C 8"
					]
				}
			}
		},
		{
			"displayName": "GET /me/registeredDevices/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Bdf 4"
					]
				}
			}
		},
		{
			"displayName": "GET /me/registeredDevices/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 8 E 01"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 5 Bdf"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/ownedObjects/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 5 Bdf"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 5 Bdf"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/owners/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 7 E 3 C"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/owners/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 7 E 3 C"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredOwners/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint Dc 52"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredOwners/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint Dc 52"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredUsers/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 3 Cf 0"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/devices/{device-id}/registeredUsers/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 3 Cf 0"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedDevices/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint 2 B 35"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/ownedDevices/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint 2 B 35"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/registeredDevices/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Items As Microsoft Graph Endpoint D 8 D 3"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/registeredDevices/{directoryObject-id}/microsoft.graph.endpoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3"
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
						"Directory Object Endpoint"
					],
					"operation": [
						"Get Microsoft Graph Directory Object Item As Microsoft Graph Endpoint D 8 D 3"
					]
				}
			}
		},
];
