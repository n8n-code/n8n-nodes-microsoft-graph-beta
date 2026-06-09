import type { INodeProperties } from 'n8n-workflow';

export const auditLogsProvisioningObjectSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					]
				}
			},
			"options": [
				{
					"name": "Audit Logs List Directory Provisioning",
					"value": "Audit Logs List Directory Provisioning",
					"action": "Get directoryProvisioning from auditLogs",
					"description": "Get directoryProvisioning from auditLogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/directoryProvisioning"
						}
					}
				},
				{
					"name": "Audit Logs Create Directory Provisioning",
					"value": "Audit Logs Create Directory Provisioning",
					"action": "Create new navigation property to directoryProvisioning for auditLogs",
					"description": "Create new navigation property to directoryProvisioning for auditLogs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auditLogs/directoryProvisioning"
						}
					}
				},
				{
					"name": "Audit Logs Delete Directory Provisioning",
					"value": "Audit Logs Delete Directory Provisioning",
					"action": "Delete navigation property directoryProvisioning for auditLogs",
					"description": "Delete navigation property directoryProvisioning for auditLogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/auditLogs/directoryProvisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Get Directory Provisioning",
					"value": "Audit Logs Get Directory Provisioning",
					"action": "Get directoryProvisioning from auditLogs",
					"description": "Get directoryProvisioning from auditLogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/directoryProvisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Update Directory Provisioning",
					"value": "Audit Logs Update Directory Provisioning",
					"action": "Update the navigation property directoryProvisioning in auditLogs",
					"description": "Update the navigation property directoryProvisioning in auditLogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/auditLogs/directoryProvisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs List Provisioning",
					"value": "Audit Logs List Provisioning",
					"action": "List provisioningObjectSummary",
					"description": "Get all provisioning events that occurred in your tenant, such as the deletion of a group in a target application or the creation of a user when provisioning user accounts from your HR system. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/provisioning"
						}
					}
				},
				{
					"name": "Audit Logs Create Provisioning",
					"value": "Audit Logs Create Provisioning",
					"action": "Create new navigation property to provisioning for auditLogs",
					"description": "Create new navigation property to provisioning for auditLogs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auditLogs/provisioning"
						}
					}
				},
				{
					"name": "Audit Logs Delete Provisioning",
					"value": "Audit Logs Delete Provisioning",
					"action": "Delete navigation property provisioning for auditLogs",
					"description": "Delete navigation property provisioning for auditLogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/auditLogs/provisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Get Provisioning",
					"value": "Audit Logs Get Provisioning",
					"action": "Get provisioning from auditLogs",
					"description": "Get provisioning from auditLogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/provisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Update Provisioning",
					"value": "Audit Logs Update Provisioning",
					"action": "Update the navigation property provisioning in auditLogs",
					"description": "Update the navigation property provisioning in auditLogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/auditLogs/provisioning/{{$parameter[\"provisioningObjectSummary-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /auditLogs/directoryProvisioning",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/directoryProvisioning",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Create Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/directoryProvisioning<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Create Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Delete Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Delete Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Directory Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Update Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Update Directory Provisioning"
					]
				}
			}
		},
		{
			"displayName": "GET /auditLogs/provisioning",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs List Provisioning"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/provisioning",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Create Provisioning"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/provisioning<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Create Provisioning"
					]
				}
			}
		},
		{
			"displayName": "DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Delete Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Delete Provisioning"
					]
				}
			}
		},
		{
			"displayName": "GET /auditLogs/provisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Provisioning"
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
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Get Provisioning"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Update Provisioning"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Provisioning Object Summary"
					],
					"operation": [
						"Audit Logs Update Provisioning"
					]
				}
			}
		},
];
