import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyObjectFileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Object Files",
					"value": "Device Management List Group Policy Object Files",
					"action": "Get groupPolicyObjectFiles from deviceManagement",
					"description": "A list of Group Policy Object files uploaded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyObjectFiles"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Object Files",
					"value": "Device Management Create Group Policy Object Files",
					"action": "Create new navigation property to groupPolicyObjectFiles for deviceManagement",
					"description": "Create new navigation property to groupPolicyObjectFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyObjectFiles"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Object Files",
					"value": "Device Management Delete Group Policy Object Files",
					"action": "Delete navigation property groupPolicyObjectFiles for deviceManagement",
					"description": "Delete navigation property groupPolicyObjectFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyObjectFiles/{{$parameter[\"groupPolicyObjectFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Object Files",
					"value": "Device Management Get Group Policy Object Files",
					"action": "Get groupPolicyObjectFiles from deviceManagement",
					"description": "A list of Group Policy Object files uploaded.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyObjectFiles/{{$parameter[\"groupPolicyObjectFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Object Files",
					"value": "Device Management Update Group Policy Object Files",
					"action": "Update the navigation property groupPolicyObjectFiles in deviceManagement",
					"description": "Update the navigation property groupPolicyObjectFiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyObjectFiles/{{$parameter[\"groupPolicyObjectFile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyObjectFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management List Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyObjectFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Create Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyObjectFiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Create Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Delete Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Delete Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Get Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Get Group Policy Object Files"
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
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Get Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Update Group Policy Object Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyObjectFiles/{groupPolicyObjectFile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Object File"
					],
					"operation": [
						"Device Management Update Group Policy Object Files"
					]
				}
			}
		},
];
