import type { INodeProperties } from 'n8n-workflow';

export const securityUserSecurityProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					]
				}
			},
			"options": [
				{
					"name": "Security List User Security Profiles",
					"value": "Security List User Security Profiles",
					"action": "Get userSecurityProfiles from security",
					"description": "Get userSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/userSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Create User Security Profiles",
					"value": "Security Create User Security Profiles",
					"action": "Create new navigation property to userSecurityProfiles for security",
					"description": "Create new navigation property to userSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/userSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Delete User Security Profiles",
					"value": "Security Delete User Security Profiles",
					"action": "Delete navigation property userSecurityProfiles for security",
					"description": "Delete navigation property userSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/userSecurityProfiles/{{$parameter[\"userSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get User Security Profiles",
					"value": "Security Get User Security Profiles",
					"action": "Get userSecurityProfiles from security",
					"description": "Get userSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/userSecurityProfiles/{{$parameter[\"userSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update User Security Profiles",
					"value": "Security Update User Security Profiles",
					"action": "Update the navigation property userSecurityProfiles in security",
					"description": "Update the navigation property userSecurityProfiles in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/userSecurityProfiles/{{$parameter[\"userSecurityProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/userSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security List User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/userSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Create User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/userSecurityProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Create User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/userSecurityProfiles/{userSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Delete User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security Delete User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /security/userSecurityProfiles/{userSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Get User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security Get User Security Profiles"
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
						"Security User Security Profile"
					],
					"operation": [
						"Security Get User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/userSecurityProfiles/{userSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Update User Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/userSecurityProfiles/{userSecurityProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security User Security Profile"
					],
					"operation": [
						"Security Update User Security Profiles"
					]
				}
			}
		},
];
