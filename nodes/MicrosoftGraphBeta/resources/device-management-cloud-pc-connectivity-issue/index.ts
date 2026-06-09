import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementCloudPcConnectivityIssueDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Cloud PC Connectivity Issues",
					"value": "Device Management List Cloud PC Connectivity Issues",
					"action": "Get cloudPCConnectivityIssues from deviceManagement",
					"description": "The list of CloudPC Connectivity Issue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/cloudPCConnectivityIssues"
						}
					}
				},
				{
					"name": "Device Management Create Cloud PC Connectivity Issues",
					"value": "Device Management Create Cloud PC Connectivity Issues",
					"action": "Create new navigation property to cloudPCConnectivityIssues for deviceManagement",
					"description": "Create new navigation property to cloudPCConnectivityIssues for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/cloudPCConnectivityIssues"
						}
					}
				},
				{
					"name": "Device Management Delete Cloud PC Connectivity Issues",
					"value": "Device Management Delete Cloud PC Connectivity Issues",
					"action": "Delete navigation property cloudPCConnectivityIssues for deviceManagement",
					"description": "Delete navigation property cloudPCConnectivityIssues for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/cloudPCConnectivityIssues/{{$parameter[\"cloudPCConnectivityIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Cloud PC Connectivity Issues",
					"value": "Device Management Get Cloud PC Connectivity Issues",
					"action": "Get cloudPCConnectivityIssues from deviceManagement",
					"description": "The list of CloudPC Connectivity Issue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/cloudPCConnectivityIssues/{{$parameter[\"cloudPCConnectivityIssue-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Cloud PC Connectivity Issues",
					"value": "Device Management Update Cloud PC Connectivity Issues",
					"action": "Update the navigation property cloudPCConnectivityIssues in deviceManagement",
					"description": "Update the navigation property cloudPCConnectivityIssues in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/cloudPCConnectivityIssues/{{$parameter[\"cloudPCConnectivityIssue-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/cloudPCConnectivityIssues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management List Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/cloudPCConnectivityIssues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Create Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/cloudPCConnectivityIssues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Create Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Delete Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Delete Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Get Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Get Cloud PC Connectivity Issues"
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
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Get Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Update Cloud PC Connectivity Issues"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/cloudPCConnectivityIssues/{cloudPCConnectivityIssue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Cloud PC Connectivity Issue"
					],
					"operation": [
						"Device Management Update Cloud PC Connectivity Issues"
					]
				}
			}
		},
];
