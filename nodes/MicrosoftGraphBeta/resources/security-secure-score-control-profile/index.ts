import type { INodeProperties } from 'n8n-workflow';

export const securitySecureScoreControlProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					]
				}
			},
			"options": [
				{
					"name": "Security List Secure Score Control Profiles",
					"value": "Security List Secure Score Control Profiles",
					"action": "List secureScoreControlProfiles",
					"description": "Retrieves a list of secureScoreControlProfile objects for a tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/secureScoreControlProfiles"
						}
					}
				},
				{
					"name": "Security Create Secure Score Control Profiles",
					"value": "Security Create Secure Score Control Profiles",
					"action": "Create new navigation property to secureScoreControlProfiles for security",
					"description": "Create new navigation property to secureScoreControlProfiles for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/secureScoreControlProfiles"
						}
					}
				},
				{
					"name": "Security Delete Secure Score Control Profiles",
					"value": "Security Delete Secure Score Control Profiles",
					"action": "Delete navigation property secureScoreControlProfiles for security",
					"description": "Delete navigation property secureScoreControlProfiles for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/secureScoreControlProfiles/{{$parameter[\"secureScoreControlProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Secure Score Control Profiles",
					"value": "Security Get Secure Score Control Profiles",
					"action": "Get secureScoreControlProfiles from security",
					"description": "Get secureScoreControlProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/secureScoreControlProfiles/{{$parameter[\"secureScoreControlProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Secure Score Control Profiles",
					"value": "Security Update Secure Score Control Profiles",
					"action": "Update the navigation property secureScoreControlProfiles in security",
					"description": "Update the navigation property secureScoreControlProfiles in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/secureScoreControlProfiles/{{$parameter[\"secureScoreControlProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/secureScoreControlProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security List Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/secureScoreControlProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Create Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/secureScoreControlProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Create Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Delete Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Delete Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Get Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Get Secure Score Control Profiles"
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
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Get Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Update Secure Score Control Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score Control Profile"
					],
					"operation": [
						"Security Update Secure Score Control Profiles"
					]
				}
			}
		},
];
