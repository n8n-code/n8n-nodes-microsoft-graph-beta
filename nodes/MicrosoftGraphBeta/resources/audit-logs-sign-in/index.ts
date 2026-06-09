import type { INodeProperties } from 'n8n-workflow';

export const auditLogsSignInDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					]
				}
			},
			"options": [
				{
					"name": "Audit Logs List Sign Ins",
					"value": "Audit Logs List Sign Ins",
					"action": "List signIns",
					"description": "Get a list of signIn objects. The list contains the user sign-ins for your Azure Active Directory tenant. Sign-ins where a username and password are passed as part of authorization token, and successful federated sign-ins are currently included in the sign-in logs. The maximum and default page size is 1,000 objects and by default, the most recent sign-ins are returned first. Only sign-in events that occurred within the Azure Active Directory (Azure AD) default retention period are available.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/signIns"
						}
					}
				},
				{
					"name": "Audit Logs Create Sign Ins",
					"value": "Audit Logs Create Sign Ins",
					"action": "Create new navigation property to signIns for auditLogs",
					"description": "Create new navigation property to signIns for auditLogs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auditLogs/signIns"
						}
					}
				},
				{
					"name": "Audit Logs Delete Sign Ins",
					"value": "Audit Logs Delete Sign Ins",
					"action": "Delete navigation property signIns for auditLogs",
					"description": "Delete navigation property signIns for auditLogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/auditLogs/signIns/{{$parameter[\"signIn-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Get Sign Ins",
					"value": "Audit Logs Get Sign Ins",
					"action": "Get signIns from auditLogs",
					"description": "Get signIns from auditLogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs/signIns/{{$parameter[\"signIn-id\"]}}"
						}
					}
				},
				{
					"name": "Audit Logs Update Sign Ins",
					"value": "Audit Logs Update Sign Ins",
					"action": "Update the navigation property signIns in auditLogs",
					"description": "Update the navigation property signIns in auditLogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/auditLogs/signIns/{{$parameter[\"signIn-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /auditLogs/signIns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs List Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/signIns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Create Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/signIns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Create Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "DELETE /auditLogs/signIns/{signIn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Delete Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Delete Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "GET /auditLogs/signIns/{signIn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Get Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Get Sign Ins"
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
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Get Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/signIns/{signIn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Update Sign Ins"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs/signIns/{signIn-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Sign In"
					],
					"operation": [
						"Audit Logs Update Sign Ins"
					]
				}
			}
		},
];
