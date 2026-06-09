import type { INodeProperties } from 'n8n-workflow';

export const securityHostSecurityProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					]
				}
			},
			"options": [
				{
					"name": "Security List Host Security Profiles",
					"value": "Security List Host Security Profiles",
					"action": "Get hostSecurityProfiles from security",
					"description": "Get hostSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/hostSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Create Host Security Profiles",
					"value": "Security Create Host Security Profiles",
					"action": "Create new navigation property to hostSecurityProfiles for security",
					"description": "Create new navigation property to hostSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/hostSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Delete Host Security Profiles",
					"value": "Security Delete Host Security Profiles",
					"action": "Delete navigation property hostSecurityProfiles for security",
					"description": "Delete navigation property hostSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/hostSecurityProfiles/{{$parameter[\"hostSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Host Security Profiles",
					"value": "Security Get Host Security Profiles",
					"action": "Get hostSecurityProfiles from security",
					"description": "Get hostSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/hostSecurityProfiles/{{$parameter[\"hostSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Host Security Profiles",
					"value": "Security Update Host Security Profiles",
					"action": "Update the navigation property hostSecurityProfiles in security",
					"description": "Update the navigation property hostSecurityProfiles in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/hostSecurityProfiles/{{$parameter[\"hostSecurityProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/hostSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security List Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/hostSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Create Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/hostSecurityProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Create Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Delete Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security Delete Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /security/hostSecurityProfiles/{hostSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Get Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security Get Host Security Profiles"
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
						"Security Host Security Profile"
					],
					"operation": [
						"Security Get Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Update Host Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Host Security Profile"
					],
					"operation": [
						"Security Update Host Security Profiles"
					]
				}
			}
		},
];
