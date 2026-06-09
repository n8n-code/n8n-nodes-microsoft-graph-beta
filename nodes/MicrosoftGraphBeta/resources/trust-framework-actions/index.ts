import type { INodeProperties } from 'n8n-workflow';

export const trustFrameworkActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					]
				}
			},
			"options": [
				{
					"name": "Trust Framework Key Sets Trust Framework Key Set Generate Key",
					"value": "Trust Framework Key Sets Trust Framework Key Set Generate Key",
					"action": "Invoke action generateKey",
					"description": "Generate a trustFrameworkKey and a secret automatically in the trustFrameworkKeyset. The caller doesn't have to provide a secret.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}/microsoft.graph.generateKey"
						}
					}
				},
				{
					"name": "Trust Framework Key Sets Trust Framework Key Set Upload Certificate",
					"value": "Trust Framework Key Sets Trust Framework Key Set Upload Certificate",
					"action": "Invoke action uploadCertificate",
					"description": "Upload a certificate to a trustFrameworkKeyset. The input is a base-64 encoded value of the certificate contents. This method returns trustFrameworkKey.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}/microsoft.graph.uploadCertificate"
						}
					}
				},
				{
					"name": "Trust Framework Key Sets Trust Framework Key Set Upload Pkcs 12",
					"value": "Trust Framework Key Sets Trust Framework Key Set Upload Pkcs 12",
					"action": "Invoke action uploadPkcs12",
					"description": "Upload a PKCS12 format key (PFX) to a trustFrameworkKeyset. The input is a base-64 encoded value of the Pfx certificate contents. This method returns trustFrameworkKey.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}/microsoft.graph.uploadPkcs12"
						}
					}
				},
				{
					"name": "Trust Framework Key Sets Trust Framework Key Set Upload Secret",
					"value": "Trust Framework Key Sets Trust Framework Key Set Upload Secret",
					"action": "Invoke action uploadSecret",
					"description": "Upload a plain text secret to a trustFrameworkKeyset. Examples of secrets are application secrets in Azure Active Directory, Google, Facebook, or any other identity provider. his method returns trustFrameworkKey.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}/microsoft.graph.uploadSecret"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /trustFramework/keySets/{trustFrameworkKeySet-id}/microsoft.graph.generateKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Generate Key"
					]
				}
			}
		},
		{
			"displayName": "Exp",
			"name": "exp",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "exp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Generate Key"
					]
				}
			}
		},
		{
			"displayName": "Kty",
			"name": "kty",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "kty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Generate Key"
					]
				}
			}
		},
		{
			"displayName": "Nbf",
			"name": "nbf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "nbf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Generate Key"
					]
				}
			}
		},
		{
			"displayName": "Use",
			"name": "use",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "use",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Generate Key"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/keySets/{trustFrameworkKeySet-id}/microsoft.graph.uploadCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Certificate"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Certificate"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/keySets/{trustFrameworkKeySet-id}/microsoft.graph.uploadPkcs12",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Pkcs 12"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Pkcs 12"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Pkcs 12"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/keySets/{trustFrameworkKeySet-id}/microsoft.graph.uploadSecret",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Secret"
					]
				}
			}
		},
		{
			"displayName": "Exp",
			"name": "exp",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "exp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Secret"
					]
				}
			}
		},
		{
			"displayName": "K",
			"name": "k",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "k",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Secret"
					]
				}
			}
		},
		{
			"displayName": "Nbf",
			"name": "nbf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "nbf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Secret"
					]
				}
			}
		},
		{
			"displayName": "Use",
			"name": "use",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "use",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Actions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Upload Secret"
					]
				}
			}
		},
];
