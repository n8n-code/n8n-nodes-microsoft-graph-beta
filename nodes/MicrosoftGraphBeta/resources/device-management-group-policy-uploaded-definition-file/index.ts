import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementGroupPolicyUploadedDefinitionFileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Group Policy Uploaded Definition Files",
					"value": "Device Management List Group Policy Uploaded Definition Files",
					"action": "Get groupPolicyUploadedDefinitionFiles from deviceManagement",
					"description": "The available group policy uploaded definition files for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles"
						}
					}
				},
				{
					"name": "Device Management Create Group Policy Uploaded Definition Files",
					"value": "Device Management Create Group Policy Uploaded Definition Files",
					"action": "Create new navigation property to groupPolicyUploadedDefinitionFiles for deviceManagement",
					"description": "Create new navigation property to groupPolicyUploadedDefinitionFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles"
						}
					}
				},
				{
					"name": "Device Management Delete Group Policy Uploaded Definition Files",
					"value": "Device Management Delete Group Policy Uploaded Definition Files",
					"action": "Delete navigation property groupPolicyUploadedDefinitionFiles for deviceManagement",
					"description": "Delete navigation property groupPolicyUploadedDefinitionFiles for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Group Policy Uploaded Definition Files",
					"value": "Device Management Get Group Policy Uploaded Definition Files",
					"action": "Get groupPolicyUploadedDefinitionFiles from deviceManagement",
					"description": "The available group policy uploaded definition files for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Group Policy Uploaded Definition Files",
					"value": "Device Management Update Group Policy Uploaded Definition Files",
					"action": "Update the navigation property groupPolicyUploadedDefinitionFiles in deviceManagement",
					"description": "Update the navigation property groupPolicyUploadedDefinitionFiles in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files List Group Policy Operations",
					"value": "Device Management Group Policy Uploaded Definition Files List Group Policy Operations",
					"action": "Get groupPolicyOperations from deviceManagement",
					"description": "The list of operations on the uploaded ADMX file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/groupPolicyOperations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Create Group Policy Operations",
					"value": "Device Management Group Policy Uploaded Definition Files Create Group Policy Operations",
					"action": "Create new navigation property to groupPolicyOperations for deviceManagement",
					"description": "Create new navigation property to groupPolicyOperations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/groupPolicyOperations"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Delete Group Policy Operations",
					"value": "Device Management Group Policy Uploaded Definition Files Delete Group Policy Operations",
					"action": "Delete navigation property groupPolicyOperations for deviceManagement",
					"description": "Delete navigation property groupPolicyOperations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/groupPolicyOperations/{{$parameter[\"groupPolicyOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Get Group Policy Operations",
					"value": "Device Management Group Policy Uploaded Definition Files Get Group Policy Operations",
					"action": "Get groupPolicyOperations from deviceManagement",
					"description": "The list of operations on the uploaded ADMX file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/groupPolicyOperations/{{$parameter[\"groupPolicyOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Group Policy Uploaded Definition Files Update Group Policy Operations",
					"value": "Device Management Group Policy Uploaded Definition Files Update Group Policy Operations",
					"action": "Update the navigation property groupPolicyOperations in deviceManagement",
					"description": "Update the navigation property groupPolicyOperations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/groupPolicyUploadedDefinitionFiles/{{$parameter[\"groupPolicyUploadedDefinitionFile-id\"]}}/groupPolicyOperations/{{$parameter[\"groupPolicyOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyUploadedDefinitionFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management List Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Create Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Create Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Delete Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Delete Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Uploaded Definition Files"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Get Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Update Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Update Group Policy Uploaded Definition Files"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files List Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Create Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Create Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Delete Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Delete Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Get Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Get Group Policy Operations"
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
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Get Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Update Group Policy Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile-id}/groupPolicyOperations/{groupPolicyOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Group Policy Uploaded Definition File"
					],
					"operation": [
						"Device Management Group Policy Uploaded Definition Files Update Group Policy Operations"
					]
				}
			}
		},
];
