import type { INodeProperties } from 'n8n-workflow';

export const reportsCredentialUserRegistrationDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					]
				}
			},
			"options": [
				{
					"name": "Reports List Credential User Registration Details",
					"value": "Reports List Credential User Registration Details",
					"action": "List credentialUserRegistrationDetails",
					"description": "Get a list of credentialUserRegistrationDetails objects for a given tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/credentialUserRegistrationDetails"
						}
					}
				},
				{
					"name": "Reports Create Credential User Registration Details",
					"value": "Reports Create Credential User Registration Details",
					"action": "Create new navigation property to credentialUserRegistrationDetails for reports",
					"description": "Create new navigation property to credentialUserRegistrationDetails for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/credentialUserRegistrationDetails"
						}
					}
				},
				{
					"name": "Reports Delete Credential User Registration Details",
					"value": "Reports Delete Credential User Registration Details",
					"action": "Delete navigation property credentialUserRegistrationDetails for reports",
					"description": "Delete navigation property credentialUserRegistrationDetails for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Credential User Registration Details",
					"value": "Reports Get Credential User Registration Details",
					"action": "Get credentialUserRegistrationDetails from reports",
					"description": "Details of the usage of self-service password reset and multi-factor authentication (MFA) for all registered users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Credential User Registration Details",
					"value": "Reports Update Credential User Registration Details",
					"action": "Update the navigation property credentialUserRegistrationDetails in reports",
					"description": "Update the navigation property credentialUserRegistrationDetails in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/credentialUserRegistrationDetails/{{$parameter[\"credentialUserRegistrationDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/credentialUserRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports List Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/credentialUserRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Create Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/credentialUserRegistrationDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Create Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Delete Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Delete Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Get Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Get Credential User Registration Details"
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
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Get Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Update Credential User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Credential User Registration Details"
					],
					"operation": [
						"Reports Update Credential User Registration Details"
					]
				}
			}
		},
];
