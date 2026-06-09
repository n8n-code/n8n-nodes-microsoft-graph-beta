import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyDefinitionFileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Definition Files",
					"value": "Device Management List Group Policy Definition Files",
					"action": "Get groupPolicyDefinitionFiles from deviceManagement",
					"description": "The available group policy definition files for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Definition Files",
					"value": "Device Management Create Group Policy Definition Files",
					"action": "Create new navigation property to groupPolicyDefinitionFiles for deviceManagement",
					"description": "Create new navigation property to groupPolicyDefinitionFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Definition Files",
					"value": "Device Management Delete Group Policy Definition Files",
					"action": "Delete navigation property groupPolicyDefinitionFiles for deviceManagement",
					"description": "Delete navigation property groupPolicyDefinitionFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles/{{$parameter[\"groupPolicyDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Definition Files",
					"value": "Device Management Get Group Policy Definition Files",
					"action": "Get groupPolicyDefinitionFiles from deviceManagement",
					"description": "The available group policy definition files for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles/{{$parameter[\"groupPolicyDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Definition Files",
					"value": "Device Management Update Group Policy Definition Files",
					"action": "Update the navigation property groupPolicyDefinitionFiles in deviceManagement",
					"description": "Update the navigation property groupPolicyDefinitionFiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles/{{$parameter[\"groupPolicyDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definition Files List Definitions",
					"value": "Device Management Group Policy Definition Files List Definitions",
					"action": "Get definitions from deviceManagement",
					"description": "The group policy definitions associated with the file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles/{{$parameter[\"groupPolicyDefinitionFile-id\"]}}/definitions"
						}
					}
				},
				{
					"name": "Device Management Group Policy Definition Files Get Definitions",
					"value": "Device Management Group Policy Definition Files Get Definitions",
					"action": "Get definitions from deviceManagement",
					"description": "The group policy definitions associated with the file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyDefinitionFiles/{{$parameter[\"groupPolicyDefinitionFile-id\"]}}/definitions/{{$parameter[\"groupPolicyDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitionFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management List Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitionFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Create Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyDefinitionFiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Create Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Delete Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Delete Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Definition Files"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Update Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Update Group Policy Definition Files"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files List Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}/definitions/{groupPolicyDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files Get Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files Get Definitions"
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
						"Device Management Group Policy Definition File"
					],
					"operation": [
						"Device Management Group Policy Definition Files Get Definitions"
					]
				}
			}
		},
];
